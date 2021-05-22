function enviarMensagem(msg){
    const lines = msg.split("\n"); 

    let i = 0;       

    setInterval(() => { 
        if(i >= lines.length) return

        if(lines[i].trim() != ''){ 
            console.log(lines[i]); 
    
            window.InputEvent = window.Event || window.InputEvent;
    
            const event = new InputEvent('input', { bubbles: true });
    
            const textbox = document.querySelector('div._2_1wd[data-tab="6"]');
    
            textbox.textContent = lines[i];
    
            textbox.dispatchEvent(event);
    
            document.querySelector("button._1E0Oz").click();                   

        }
        i++;
    }, 2000)
}
enviarMensagem(`É campeão!!!
Chupaaaa!!
Meu time é foda...
Chora na cama que é quente
CAMPEÃO
É campeão!!!
Chupaaaa!!
Meu time é foda...
Chora na cama que é quente
CAMPEÃO
É campeão!!!
Chupaaaa!!
Meu time é foda...
Chora na cama que é quente
CAMPEÃO
É campeão!!!
Chupaaaa!!
Meu time é foda...
Chora na cama que é quente
CAMPEÃO
É campeão!!!
Chupaaaa!!
Meu time é foda...
Chora na cama que é quente
CAMPEÃO
`);
