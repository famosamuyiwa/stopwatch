function stopwatch() {
  const buttons = document.querySelectorAll("button")
  const secs = document.getElementById("seconds")
  const mins = document.getElementById("minutes")

  let second = 0
  let minute = 0
  let stillCounting = false

  buttons.forEach(button => {
    button.onclick = () => {
      if (button.getAttribute("id") == "button-start") {
        startCount()
      }
      if (button.getAttribute("id") == "button-stop") {
        stopCount()
      }
      if (button.getAttribute("id") == "button-reset") {
        reset()
      }
    }
  })

  const startCount = () => {
    stillCounting = true

    let interval = setInterval(() => {
      if(stillCounting){
        if(second == 60){
          second = 0
          minute += 1
          if(minute < 10) {
          mins.innerText = '0' + minute
        }
          else{
          mins.innerText = minute
        }        

        }

        if(second < 10) {
          secs.innerText = '0' + second
        }
        else{
          secs.innerText = second
        }
        second++
      }
      else{
        clearInterval(interval)
      }

    }, 1000)

  }

  const stopCount = () => {
    stillCounting = false
  }

  const reset = () => {
    stillCounting = false
    
    secs.innerText = "00"
    mins.innerText = "00"

    second = 0
    minute = 0
  }
}

document.onload = stopwatch()