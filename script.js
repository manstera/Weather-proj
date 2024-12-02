let newButton = document.querySelector(".send_btn")
let textArea = document.querySelector(".textarea_class")
let comment = document.querySelector(".comment")
let userName = document.querySelector(".name_area")
let commentBlock = document.querySelector(".comment_block")



newButton.addEventListener("click", function(){
    setTimeout(() => {
        let text = textArea.value
        let user = userName.value

        localStorage.setItem("SomeText", text)
        localStorage.setItem("someUser", user)
        console.log("text")
        let getText = localStorage.getItem("SomeText", text)
        let getUser = localStorage.getItem("someUser", user)
        let p = document.createElement("p")
        let some = document.createElement("p")
        some.textContent = `${getUser} :`
        p.textContent = getText
        
        commentBlock.appendChild(some)
        commentBlock.appendChild(p)



        
        
        
        some.className = "user_name"
        if(textArea.value !== "" || userName.value !== ""){
            textArea.value = ""
            userName.value = ""
        }
        


    }, 1000)
})