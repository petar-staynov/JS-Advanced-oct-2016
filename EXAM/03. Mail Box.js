class MailBox {
    constructor(){
        this.messages = [];
        // this.messages.push('TEST SUBJECT', 'TEST TEXT');
        // console.log(this.messages);
    }
    addMessage(subject, text){
        this.subject = subject;
        this.text = text;
        this.messages.push({subject:subject, text:text});
        //remove empty messages?
        return this;
    }
    get messageCount(){
        return this.messages.length;
    }
    deleteAllMessages(){
        this.messages = [];
        return this;
    }

    findBySubject(substr){
        this.substr = substr;
        let findResult = [];

        for (let object = 0; object < this.messages.length; object++){
            // console.log((this.messages[object].subject).toString());

            if ((this.messages[object].subject).toString().match(substr)){
                findResult.push(this.messages[object]);
            }
        }
        return findResult;
    }
    toString(){
        let messageList = ``;
        if (this.messages.length === 0){
            messageList += "* (empty mailbox)";
        }
        for (let message of this.messages){
            messageList += ` * [${message.subject}] ${message.text}`;
            if (message != this.messages[this.messages.length-1]){
                messageList += `\n`;
            }
        }

        return messageList;
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());

