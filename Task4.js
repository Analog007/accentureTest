/**
 * How to run
 * 
 * In the index HTML there is a script with the imported js file. You have to run the index.html.
 * 
 */

/**
 * 
 * @param {number} t 
 */
function delay(t) {
  return new Promise(resolve => {
    setTimeout(resolve, t);
  });
}

/** 
 * Gets the processing page 
 * @param {array} data  
 */
async function getProcessingPage(data) {
  for (i = 0; i < data.length; i++) {
    if (data[i].state === 'processing') {
      //console.log('processing')
      await delay(2000);
    }
    if (data[i].state === 'success') {
      //console.log('success')
      return { title: 'Order complete', message: null }
    }
    if (data[i].state === 'error') {
      switch (data[i].ErrorCode) {
        case 'NO_STOCK':
          //console.log('NO_STOCK')
          return { title: 'Error page', message: 'No stock has been found' }
        case 'INCORRECT_DETAILS':
          //console.log('INCORRECT_DETAILS')
          return { title: 'Error page', message: 'Incorrect details have been entered' }
        case null:
          //console.log('null')
          return { title: 'Error page', message: null }
        case undefined:
          //console.log('undefined')
          return { title: 'Error page', message: null }
      }
    }
  }
}


let response = [{ state: 'processing' }, { state: 'error' }];
getProcessingPage(response).then(() => {
  console.log("done");
});

