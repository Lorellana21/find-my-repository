const getApiData = () => {
    return fetch("//api.github.com/users/lukas/repos")
      .then((response) => response.json())
      .then((data) => {

          return data;
              
  });
};
  
  
  export default getApiData;



// async function getData(){
//     try{
//       const response = await fetch("https://api.github.com/users/lukas/repos")
//       const resJson = await response.json();
//       console.log(resJson);
  
//       if(!response.ok) throw {status: response.status, statusText: response.statusText};
  
//     } catch(err){
//       console.log(err);
//     } 
    
    
//   }
