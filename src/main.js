import './style.css'
import * as THREE from 'three'
import Papa from 'papaparse'

class CrateDigger {
  constructor() {
    this.scene = null
    this.camera = null
    this.renderer = null
    this.crates = []
    this.records = []
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()
    this.isMouseDown = false
    this.mouseDownPosition = new THREE.Vector2()
    this.cameraPosition = new THREE.Spherical(15, Math.PI / 3, 0)
    this.selectedCrate = null
    
    this.loadingEl = document.getElementById('loading')
    this.infoPanelEl = document.getElementById('info-panel')
    this.albumCoverEl = document.getElementById('album-cover')
    this.albumTitleEl = document.getElementById('album-title')
    this.albumArtistEl = document.getElementById('album-artist')
    this.albumYearEl = document.getElementById('album-year')
    this.closeInfoEl = document.getElementById('close-info')
    
    this.init()
  }

  async init() {
    this.setupScene()
    this.setupLighting()
    this.setupCamera()
    this.setupRenderer()
    this.setupEventListeners()
    
    // Load CSV data and create crates
    await this.loadData()
    this.hideLoading()
    this.animate()
  }

  setupScene() {
    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.Fog(0x667eea, 10, 100)
  }

  setupLighting() {
    // Ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    this.scene.add(ambientLight)
    
    // Main directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(10, 10, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    this.scene.add(directionalLight)
    
    // Fill light
    const fillLight = new THREE.DirectionalLight(0x764ba2, 0.3)
    fillLight.position.set(-5, 5, -5)
    this.scene.add(fillLight)
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    this.updateCameraPosition()
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    
    document.getElementById('app').appendChild(this.renderer.domElement)
  }

  async loadData() {
    try {
      const response = await fetch('/cratediggerDB.csv')
      const csvText = await response.text()
      
      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          // Take only first 250 records as specified
          this.records = results.data.slice(0, 250).filter(record => 
            record.title && record.artist && record.cover
          )
          this.createCrates()
        },
        error: (error) => {
          console.error('Error parsing CSV:', error)
        }
      })
    } catch (error) {
      console.error('Error loading CSV file:', error)
    }
  }

  createCrates() {
    const cratesPerRing = 12
    const ringCount = Math.ceil(this.records.length / cratesPerRing)
    
    this.records.forEach((record, index) => {
      const ringIndex = Math.floor(index / cratesPerRing)
      const positionInRing = index % cratesPerRing
      
      // Create a spiral arrangement
      const radius = 3 + ringIndex * 2
      const angle = (positionInRing / cratesPerRing) * Math.PI * 2 + ringIndex * 0.5
      const height = ringIndex * 1.5 - ringCount * 0.75
      
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = height
      
      const crate = this.createCrate(record, new THREE.Vector3(x, y, z))
      this.crates.push(crate)
      this.scene.add(crate)
    })
  }

  createCrate(record, position) {
    // Create crate geometry - a box representing a vinyl crate
    const crateGeometry = new THREE.BoxGeometry(1, 0.8, 1)
    
    // Wood-like material for the crate
    const crateMaterial = new THREE.MeshLambertMaterial({
      color: 0x8B4513,
      roughness: 0.8,
      metalness: 0.1
    })
    
    const crate = new THREE.Mesh(crateGeometry, crateMaterial)
    crate.position.copy(position)
    crate.castShadow = true
    crate.receiveShadow = true
    
    // Add a slight random rotation for more natural look
    crate.rotation.y = Math.random() * 0.2 - 0.1
    
    // Store record data for interaction
    crate.userData = { record, originalPosition: position.clone() }
    
    // Create record inside the crate
    const recordGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.02, 16)
    const recordMaterial = new THREE.MeshLambertMaterial({
      color: 0x000000,
      shininess: 30
    })
    
    const recordMesh = new THREE.Mesh(recordGeometry, recordMaterial)
    recordMesh.position.set(0, 0.42, 0)
    recordMesh.rotation.x = Math.PI / 2
    crate.add(recordMesh)
    
    // Add some animated movement
    const animationOffset = Math.random() * Math.PI * 2
    crate.userData.animationOffset = animationOffset
    
    return crate
  }

  setupEventListeners() {
    // Mouse events
    window.addEventListener('mousedown', (event) => this.onMouseDown(event))
    window.addEventListener('mousemove', (event) => this.onMouseMove(event))
    window.addEventListener('mouseup', (event) => this.onMouseUp(event))
    window.addEventListener('wheel', (event) => this.onWheel(event))
    window.addEventListener('click', (event) => this.onClick(event))
    
    // Touch events for mobile
    window.addEventListener('touchstart', (event) => this.onTouchStart(event))
    window.addEventListener('touchmove', (event) => this.onTouchMove(event))
    window.addEventListener('touchend', (event) => this.onTouchEnd(event))
    
    // Window resize
    window.addEventListener('resize', () => this.onWindowResize())
    
    // Close info panel
    this.closeInfoEl.addEventListener('click', () => this.hideInfoPanel())
  }

  onMouseDown(event) {
    this.isMouseDown = true
    this.mouseDownPosition.set(event.clientX, event.clientY)
  }

  onMouseMove(event) {
    if (this.isMouseDown) {
      const deltaX = event.clientX - this.mouseDownPosition.x
      const deltaY = event.clientY - this.mouseDownPosition.y
      
      this.cameraPosition.theta -= deltaX * 0.01
      this.cameraPosition.phi += deltaY * 0.01
      this.cameraPosition.phi = Math.max(0.1, Math.min(Math.PI - 0.1, this.cameraPosition.phi))
      
      this.updateCameraPosition()
      this.mouseDownPosition.set(event.clientX, event.clientY)
    }
    
    // Update mouse position for raycasting
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  onMouseUp(event) {
    this.isMouseDown = false
  }

  onWheel(event) {
    this.cameraPosition.radius += event.deltaY * 0.01
    this.cameraPosition.radius = Math.max(5, Math.min(30, this.cameraPosition.radius))
    this.updateCameraPosition()
  }

  onClick(event) {
    // Check if click was a drag
    const dragDistance = Math.sqrt(
      Math.pow(event.clientX - this.mouseDownPosition.x, 2) +
      Math.pow(event.clientY - this.mouseDownPosition.y, 2)
    )
    
    if (dragDistance > 5) return // Ignore clicks that were drags
    
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    
    this.raycaster.setFromCamera(this.mouse, this.camera)
    const intersects = this.raycaster.intersectObjects(this.crates)
    
    if (intersects.length > 0) {
      const crate = intersects[0].object
      this.selectCrate(crate)
    } else {
      this.hideInfoPanel()
    }
  }

  onTouchStart(event) {
    if (event.touches.length === 1) {
      this.onMouseDown({ clientX: event.touches[0].clientX, clientY: event.touches[0].clientY })
    }
  }

  onTouchMove(event) {
    if (event.touches.length === 1) {
      event.preventDefault()
      this.onMouseMove({ clientX: event.touches[0].clientX, clientY: event.touches[0].clientY })
    }
  }

  onTouchEnd(event) {
    if (event.changedTouches.length === 1) {
      this.onClick({ 
        clientX: event.changedTouches[0].clientX, 
        clientY: event.changedTouches[0].clientY 
      })
      this.onMouseUp({})
    }
  }

  selectCrate(crate) {
    // Reset previous selection
    if (this.selectedCrate) {
      this.selectedCrate.scale.set(1, 1, 1)
      this.selectedCrate.material.emissive.setHex(0x000000)
    }
    
    // Highlight new selection
    this.selectedCrate = crate
    crate.scale.set(1.1, 1.1, 1.1)
    crate.material.emissive.setHex(0x222222)
    
    // Show info panel
    this.showInfoPanel(crate.userData.record)
  }

  showInfoPanel(record) {
    this.albumCoverEl.src = record.cover
    this.albumTitleEl.textContent = record.title
    this.albumArtistEl.textContent = record.artist
    this.albumYearEl.textContent = record.year
    
    this.infoPanelEl.classList.remove('hidden')
    this.infoPanelEl.classList.add('visible')
  }

  hideInfoPanel() {
    this.infoPanelEl.classList.remove('visible')
    this.infoPanelEl.classList.add('hidden')
    
    // Reset selection
    if (this.selectedCrate) {
      this.selectedCrate.scale.set(1, 1, 1)
      this.selectedCrate.material.emissive.setHex(0x000000)
      this.selectedCrate = null
    }
  }

  updateCameraPosition() {
    const x = this.cameraPosition.radius * Math.sin(this.cameraPosition.phi) * Math.cos(this.cameraPosition.theta)
    const y = this.cameraPosition.radius * Math.cos(this.cameraPosition.phi)
    const z = this.cameraPosition.radius * Math.sin(this.cameraPosition.phi) * Math.sin(this.cameraPosition.theta)
    
    this.camera.position.set(x, y, z)
    this.camera.lookAt(0, 0, 0)
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  hideLoading() {
    this.loadingEl.style.opacity = '0'
    setTimeout(() => {
      this.loadingEl.style.display = 'none'
    }, 500)
  }

  animate() {
    requestAnimationFrame(() => this.animate())
    
    // Animate crates with subtle floating motion
    const time = Date.now() * 0.001
    this.crates.forEach((crate, index) => {
      const offset = crate.userData.animationOffset
      crate.position.y = crate.userData.originalPosition.y + Math.sin(time + offset) * 0.1
      crate.rotation.y += 0.005
    })
    
    this.renderer.render(this.scene, this.camera)
  }
}

// Initialize the application
new CrateDigger()
