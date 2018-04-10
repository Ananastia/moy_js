class options{
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
     }

     newDiv(){
     	let div = document.createElement('div');
     	div.innerHTML = this.textAlign;
        document.body.appendChild(div);
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.background = this.bg;
        div.style.fontSize = this.fontSize;
     }

}


let newElement = new options('20px','120px','red','20px','Привет мир!');
newElement.newDiv();