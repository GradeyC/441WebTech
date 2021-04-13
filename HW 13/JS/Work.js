var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 300 );
var renderer = new THREE.WebGLRenderer();
var Shape1, Shape2, Shape3;
var interval = window.setInterval(myCallback, 100000);



function makeShape1(){
    var shape=new THREE.CylinderGeometry(5, 5, 15, 4);
    var material= new THREE.MeshBasicMaterial({color: 'gold' });
    Shape1=new THREE.Mesh(shape,material);
    Shape1.position.set(10,0,0);
    scene.add(Shape1);
    Shape1.scale.x=.5;
    Shape1.scale.y=.5;
    Shape1.scale.z=.5;
    animateShape1();
}

// animate the first box
function animateShape1() {
    requestAnimationFrame(animateShape1);
    Shape1.rotation.x += 0.01;
    Shape1.rotation.y += 0.01;
    Shape1.rotation.z += 0.01;
    //x scale change 
    if (Shape1.scale.x<=.5){
        Shape1.scale.x +=.1
        console.log("Growing");
    }
    else if(Shape1.scale.x>=1){
        Shape1.scale.x -=.1
        console.log("shrinking");
    }
    //y scale change 
    if (Shape1.scale.y<=.5){
        Shape1.scale.y +=.1
        console.log("Growing");
    }
    else if(Shape1.scale.y>=1){
        Shape1.scale.y -=.1
        console.log("shrinking");
    }
    else if(Shape1.scale.z>=1){
        Shape1.scale.z -=.01
        console.log("shrinking");
    }
  }

  function makeShape2(){
    var shape=new THREE.ConeGeometry( 8, 15, 10 );
    var material= new THREE.MeshBasicMaterial({color: 'blue' });
    Shape2=new THREE.Mesh(shape,material);
    Shape2.position.set(-10,0,0);
    scene.add(Shape2);
    Shape2.scale.x=.5;
    Shape2.scale.y=.5;
    Shape2.scale.z=.5;
    animateShape2();
  }
  
  function animateShape2() {
    requestAnimationFrame(animateShape2);
    Shape2.rotation.x += 0.01;
    Shape2.rotation.y += 0.01;
    Shape2.rotation.z += 0.01;
    renderer.render(scene, camera);
    if (Shape2.scale.x<=.5){
        Shape2.scale.x +=.1
        console.log("Growing");
    }
    else if(Shape2.scale.x>=1){
        Shape2.scale.x -=.01
        console.log("shrinking");
    }
    //y scale change 
    if (Shape2.scale.y<=.5){
        Shape2.scale.y +=.01
        console.log("Growing");
    }
    else if(Shape2.scale.y>=1){
        Shape2.scale.y -=.01
        console.log("shrinking");
    }
    else if(Shape2.scale.z>=1){
        Shape2.scale.z -=.01
        console.log("shrinking");
    }
  }

  function makeShape3(){
    var shape=new THREE.RingGeometry( 1, 5, 32 );
    var material= new THREE.MeshBasicMaterial({color: 'gray' });
    Shape3=new THREE.Mesh(shape,material);
    Shape3.position.set(0,0,0);
    scene.add(Shape3);
    Shape3.scale.x=.5;
    Shape3.scale.y=.5;
    Shape3.scale.z=.5;
    animateShape3();
  }
  
  function animateShape3() {
    requestAnimationFrame(animateShape3);
    Shape3.rotation.x += 0.01;
    Shape3.rotation.y += 0.01;
    Shape3.rotation.z += 0.01;
    renderer.render(scene, camera);
  }

  function getScene() {//based on example 
    var scene = new THREE.Scene();
    scene.background = new THREE.Color('purple');
    return scene;
  }

  function getCamera() {//based on example
    var aspectRatio = 1920/1080;
    var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.set(0, 0, 15);
    return camera;
  }

  function getLight(scene) {//based on example 
    var light = new THREE.PointLight('gray', 1, 0);
    light.position.set(20, 50, 20);
    scene.add(light);
  
    var ambientLight = new THREE.AmbientLight('black');
    scene.add(ambientLight);
    return light;
  }

  function getRenderer() {//based on class examples
    var renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return renderer;
  }

  function loadModel() {//from/based on class examples 
    var loader = new THREE.OBJLoader();
    loader.load('Model/Ball.obj', function (object) {
      object.rotation.z +=1;
      object.rotation.y +=1;
      scene.add(object);
      document.querySelector('h1').style.display = 'none';
    });
  }

  function getControls(camera, renderer) {//from class examples
    var controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.zoomSpeed = 0.4;
    controls.panSpeed = 0.4;
    return controls;
  }

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  };
  
  function myCallback() {
  var change1=Math.floor(Math.random()+.2);
  var change2=Math.floor(Math.random());
  var change3=Math.floor(Math.random());
  Shape1.rotation.x += change1;
  Shape1.rotation.y += change2;
  Shape1.rotation.z += change3;
  Shape2.rotation.x += change1*-1;
  Shape2.rotation.y += change2*-1;
  Shape2.rotation.z += change3*-1;
  console.log(change1);
  console.log(Shape1.scale);
  if(change1<=4){
  Shape1.scale.x += change1;
  Shape1.scale.y += change2;
  Shape1.scale.z += change3;

  Shape2.scale.x += change1*-1;
  Shape2.scale.y += change2*-1;
  Shape2.scale.z += change3*-1;
  }
  else if(change1==5){
    Shape1.scale.x += change1;
    Shape1.scale.y += change2;
    Shape1.scale.z += change3;
  
    Shape2.scale.x += (change1*-1);
    Shape2.scale.y += change2*-1;
    Shape2.scale.z += change3*-1;
  }
  else if(change1>=6){
    Shape1.scale.x += change1;
    Shape1.scale.y += change2;
    Shape1.scale.z += change3;
  
    Shape2.scale.x += change1*-1;
    Shape2.scale.y += change2*-1;
    Shape2.scale.z += change3*-1;
  }
   if(change2<=4){
    Shape1.scale.x += change1;
    Shape1.scale.y += change2;
    Shape1.scale.z += change3;
  
    Shape2.scale.x += change1*-1;
    Shape2.scale.y += change2*-1;
    Shape2.scale.z += change3*-1;
  }
  else if(change2==5){
    Shape1.scale.x += change1;
    Shape1.scale.y += change2;
    Shape1.scale.z += change3;
  
    Shape2.scale.x += change1*-1;
    Shape2.scale.y += change2*-1;
    Shape2.scale.z += change3*-1;
  }
  else if(change2>=6){
    Shape1.scale.x += change1;
    Shape1.scale.y += change2;
    Shape1.scale.z += change3;
  
    Shape2.scale.x += change1*-1;
    Shape2.scale.y += change2*-1;
    Shape2.scale.z += change3*-1;
  }
   if(change3<=4){
    Shape1.scale.x += change1*-.1;
    Shape1.scale.y += change2*-.1;
    Shape1.scale.z += change3*-.1;
  
    Shape2.scale.x += change1*-.4;
    Shape2.scale.y += change2*-.4;
    Shape2.scale.z += change3*-.4;
  }
  else if(change3==5){
    Shape1.scale.x += change1*-.2;
    Shape1.scale.y += change2*-.2;
    Shape1.scale.z += change3*-.2;
  
    Shape2.scale.x += change1*-.3;
    Shape2.scale.y += change2*-.3;
    Shape2.scale.z += change3*-.3;
  }
  else if(change3>=6){
    Shape1.scale.x += change1*-.3;
    Shape1.scale.y += change2*-.3;
    Shape1.scale.z += change3*-.3;
  
    Shape2.scale.x += change1*-.5;
    Shape2.scale.y += change2*-.5;
    Shape2.scale.z += change3*-.5;
  }
}

  var scene = getScene();
  var camera = getCamera();
  var light = getLight(scene);
  var renderer = getRenderer();
  //var controls = getControls(camera,render);
  var game1 = makeShape3(); makeShape2(); makeShape1();
  
  loadModel()
  
  render();