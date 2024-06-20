function primero() {
    return new Promise((resolve) => {
      setTimeout(()=>{
        console.log('Primero')
        resolve();
      },1000)
    })
  }
  
  function segundo() {
    return new Promise((resolve)=>{
      setTimeout(() => {
        console.log('Segundo');
        resolve();
      },2000)
    })
  }
  
  function tercero() {
    return new Promise((resolve)=>{
      setTimeout(() => {
        console.log('Tercero');
        resolve();
      },1000)
    })
  }
  
  async function order() {
    try{
      await primero()
      await segundo()
      await tercero()
      
    } catch(error) {
      console.log('error',error)
    }
  } 
  
  order();
  
  
  
  
  
  
  
  
  
  
  