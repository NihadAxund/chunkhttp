// import os from 'os'
// import{EventEmitter, once} from "node:events"
// let format = `${os.platform()}_${os.arch()}`

//  class NodeEvent extends EventEmitter{}

//   const event = new NodeEvent()

//  event.prependListener("info", () => {
//      if(os.platform()=="win32"){
//         event.emit("windowE")
//      }
//      else{
//         event.emit("linuxE")
//      }
//  })

 
// function Window(){
//      console.log("window")
//     }
    
// function linux(){
//         console.log("linux")
//     }
    
// event.addListener("windowE", Window)
// event.addListener("linuxE", linux)
// async function foo() {
    
// }

//     event.once('info', foo)
    
//     event.emit("info")

import{EventEmitter, once} from "node:events"

import fs from 'node:fs';
import http from "node:https"

// function testEvent(){
//     console.log('test fired')
//     for(let index = 0;index < 4;index++){
//         setTimeout(() =>setTimeout(() => console.log(`Test ${index}`)))
//     }
// }

// function infoEvent(){
//     console.log('info fired')
//     // for(let index = 100;index < 200;index++){
//     //     console.log(`Info ${index}`)
//     // }
//     // while(true){
//     // }
// }

// function servrInfoEvent(){
//     console.log('Server fired')
//     // for(let index = 100;index < 200;index++){
//     //     console.log(`Info ${index}`)
//     // }

// }

// class NodeEvent extends EventEmitter{}

// class ServerEvent extends EventEmitter{}

// const event = new NodeEvent()


// const server_event = new ServerEvent()

// server_event.once('info', servrInfoEvent)

// event.addListener('test', testEvent)
// event.once('info', infoEvent)

// event.prependListener("info", () => {
//     console.log("Prepend listener for info")
// })

// // console.log(event.eventNames())

// event.emit('test')
// // event.removeListener("info", infoEvent)

// event.emit('info')

// event.emit('info')
// event.emit('info')




// const ee = new EventEmitter();
// const ac = new AbortController();

// async function foo(emitter, event, signal) {
//   try {
//     await once(emitter, event, { signal });
//     console.log('event emitted!');
//   } catch (error) {
//     if (error.name === 'AbortError') {
//       console.error('Waiting for the event was canceled!');
//     } else {
//       console.error('There was an error', error.message);
//     }
//   }
// }

// foo(ee, 'foo', ac.signal);
// ac.abort(); // Abort waiting for the event
// ee.emit('foo'); // Prints: Waiting for the event was canceled!


// https://jsonplaceholder.typicode.com/todos/1


const options = {
    hostname: "https://www.jsonplaceholder.typicode.com/posts",
    // path: "/todos/1",
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}

http.get("https://jsonplaceholder.typicode.com/posts", (response) => {
    console.log(response.statusCode)
    response.setEncoding('utf8')
    let str = ""

    response.on("data", (chunk) => {
        console.log("Chunk", chunk)
        str +=chunk;
    })

    response.on("end", () => {
        console.log(str)
        const data = JSON.parse(str);
        fs.writeFile('output.json', str, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log('Data written to file successfully.');
    });

    })
})