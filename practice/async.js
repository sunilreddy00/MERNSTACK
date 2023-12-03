function delay(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}
async function exampleFunction(){
  console.log("This is QA")
  await delay(2000);
  console.log('after 2000')
  await delay(5000);
  console.log('After 5000')
}
exampleFunction()