    var currentImgIndex=0;
    var ImgSrcArray = [
    './img/lisa1.jpg',
    './img/triste1.jpg',
    './img/bravo1.jpg',
    './img/feliz1.jpg'
    ];
    var humor = [
        'Chapada',
        'Triste',
        'Puto',
        'Feliz'
    ];
    function trocar(){
        let a = document.getElementById('main')
    
      if(currentImgIndex == ImgSrcArray.length){
        currentImgIndex=0;
      }
      document.getElementById("agni").src=ImgSrcArray[currentImgIndex]; 
      a.innerHTML = humor[currentImgIndex];
        currentImgIndex++;
        

    
    }