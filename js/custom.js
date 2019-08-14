{/* <li class="chat self">
        <div class="user-photo"><img src="img/self.png"></div>
        <p class="chat-message" id="chat">Aleykum salam! <span class="messageTime">16:09</span> </p>
        
      </li> */}

      function createBubbleFirstBlock(name1, messageText1){
        var message1 = document.createElement('li');
        var imgContanier1 = document.createElement('div');
        var imgIcon1 = document.createElement('img');
        var messageEl1 = document.createElement('p');
        var timeEl1 = document.createElement('span');
        var d1 = new Date();
        var hour1 = String(d1.getHours()).padStart(2,'0');
        var minute1 = String(d1.getMinutes()).padStart(2,'0');
        var msgTime1 = hour1 + ':' + minute1;
        var nameEl1 = document.createElement('span');
        
        nameEl1.textContent = name1;
          timeEl1.textContent = msgTime1;
          messageEl1.textContent = messageText1;
        
        message1.classList.add('chat1');
        message1.classList.add('self1');
        imgContanier1.classList.add('user-photo1');
        imgIcon1.src = ('img/self.png');
        messageEl1.classList.add('chat-message1');
        timeEl1.classList.add('messageTime1');
        
        imgContanier1.appendChild(imgIcon1);
          message1.appendChild(imgContanier1);
        
          message1.appendChild(imgContanier1);
          messageEl1.appendChild(timeEl1);
          message1.appendChild(messageEl1);
        
        return message1;
        
        
        }
        // Second box----------------------------------------
        
        function createBubbleSecondBlock(name2, messageText2){
          var message2 = document.createElement('li');
          var imgContanier2 = document.createElement('div');
          var imgIcon2 = document.createElement('img');
          var messageEl2 = document.createElement('p');
          var timeEl2 = document.createElement('span');
          var d2 = new Date();
          var hour2 = String(d2.getHours()).padStart(2,'0');
          var minute2 = String(d2.getMinutes()).padStart(2,'0');
          var msgTime2 = hour2 + ':' + minute2;
          var nameEl2 = document.createElement('span');
          
          nameEl2.textContent = name2;
            timeEl2.textContent = msgTime2;
            messageEl2.textContent = messageText2;
          
          message2.classList.add('chat');
          message2.classList.add('friend');
          imgContanier2.classList.add('user-photo');
          imgIcon2.src = ('img/friend.png');
          messageEl2.classList.add('chat-message');
          timeEl2.classList.add('messageTime');
          
          imgContanier2.appendChild(imgIcon2);
            message2.appendChild(imgContanier2);
          
            message2.appendChild(imgContanier2);
            messageEl2.appendChild(timeEl2);
            message2.appendChild(messageEl2);
          
          return message2;
          
          
          }
        
        // ----------------------------------------------------
        function createBubble(name, messageText) {
          var message = document.createElement("li");
          var imgContanier = document.createElement("div");
          var imgIcon = document.createElement("img");
          var messageEl = document.createElement("p");
          var timeEl = document.createElement("span");
          var d = new Date();
          var hour = d.getHours();
          var minute = String(d.getMinutes()).padStart(2, "0");
          var msgTime = hour + ":" + minute;
          console.log(msgTime);
          var nameEl = document.createElement("span");
        
          nameEl.textContent = name;
          timeEl.textContent = msgTime;
          messageEl.textContent = messageText;
        
          //classlar add eledim
          message.classList.add("chat");
          message.classList.add("self");
          imgContanier.classList.add("user-photo");
          imgIcon.src = "img/self.png";
          messageEl.classList.add("chat-message");
          timeEl.classList.add("messageTime");
          nameEl.classList.add('name');
        
          imgContanier.appendChild(imgIcon);
          message.appendChild(imgContanier);
        
          message.appendChild(imgContanier);
          messageEl.appendChild(timeEl);
          message.appendChild(messageEl);
        //   message.appendChild(timeEl);
          
          return message;
        }
        
        function chatlog() {
          let text = document.getElementById("textarea").value;
        
          var newMessage = createBubble("Me", text);
        
          document.getElementById("chatlogs").appendChild(newMessage);
          document.getElementById("textarea").value = "";
        
          // -----------
          // let text = document.getElementById("textarea").value;
        
          var newMessage1 = createBubbleFirstBlock("Me", text);
        
          document.getElementById("chatlogs1").appendChild(newMessage1);
          document.getElementById("textarea1").value = "";
        }
        
        // ---------------------------------------------------
        
        
        {/* <li class="chat self">
                <div class="user-photo"><img src="img/self.png"></div>
                <p class="chat-message" id="chat">Aleykum salam! <span class="messageTime">16:09</span> </p>
                
              </li> */}
        
              function createBubble1(name, messageText) {
                var message = document.createElement("li");
                var imgContanier = document.createElement("div");
                var imgIcon = document.createElement("img");
                var messageEl = document.createElement("p");
                var timeEl = document.createElement("span");
                var d = new Date();
                var hour = d.getHours();
                var minute = String(d.getMinutes()).padStart(2, "0");
                var msgTime = hour + ":" + minute;
                console.log(msgTime);
                var nameEl = document.createElement("span");
              
                nameEl.textContent = name;
                timeEl.textContent = msgTime;
                messageEl.textContent = messageText;
              
                //classlar add eledim
                message.classList.add("chat1");
                message.classList.add("friend1");
                imgContanier.classList.add("user-photo1");
                imgIcon.src = "img/friend.png";
                messageEl.classList.add("chat-message1");
                timeEl.classList.add("messageTime1");
              
                imgContanier.appendChild(imgIcon);
                message.appendChild(imgContanier);
              
                message.appendChild(imgContanier);
                messageEl.appendChild(timeEl);
                message.appendChild(messageEl);
              //   message.appendChild(timeEl);
                message.style.breakBefore = name;
                return message;
              }
              
              function chatlog1() {
                let text = document.getElementById("textarea1").value;
              
                var newMessage = createBubble1("Me", text);
              
                document.getElementById("chatlogs1").appendChild(newMessage);
                document.getElementById("textarea1").value = "";
        
                var newMessage1 = createBubbleSecondBlock("Me", text);
        
          document.getElementById("chatlogs").appendChild(newMessage1);
          document.getElementById("textarea").value = "";
              }