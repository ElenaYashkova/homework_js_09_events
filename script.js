window.addEventListener("load",function () {
    let addPhoneBtn = document.querySelector(".addPhoneBtn");
    addPhoneBtn.addEventListener("click",function () {
        phones.addPhone();
    });
    let showPhones = document.querySelector(".showPhones");
    showPhones.addEventListener("click",function (e) {
        console.log(e.target);
        console.log(e.target.dataset.id);
        if(e.target.className === "showDetailsBtn"){
            phones.showDetails(e.target.dataset.id);
        }
    })
});


class Phone{
    constructor(diller,model,image,battery,description){
        this.diller = diller;
        this.model = model;
        this.image = image;
        this.battery = battery;
        this.description = description;
    }
}

class Phones{
    constructor(){
        this.arr=[];
    }
    addPhone(){
        let diller = document.querySelector("#diller").value;
        let model = document.querySelector("#model").value;
        let image = document.querySelector("#image").value;
        let battery = document.querySelector("#battery").value;
        let description = document.querySelector("#description").value;

        this.arr.push(new Phone(diller,model,image,battery,description));

        let phone = document.createElement("div");
        phone.className = "phone";
        phone.dataset.id = this.arr.length-1;
        let img = document.createElement("div");
        img.className = "img";
        img.style.backgroundImage="url('"+image+"')";
        let btn = document.createElement("button");
        btn.className = "showDetailsBtn";
        btn.dataset.id = this.arr.length-1;
        btn.innerText = "details";

        phone.appendChild(img);
        phone.appendChild(btn);

        let showPhones = document.querySelector(".showPhones");
        showPhones.appendChild(phone);
    }
    showDetails(index){
        let showDetails = document.querySelector(".showDetails");
        showDetails.innerHTML = `
            <div class="phoneDetails">
                <div class="img" style='background-image:url("${this.arr[index].image}")'></div>
                <div class="details">
                    <dl>
                        <dt><b>diller:</b></dt>
                        <dd>${this.arr[index].diller}</dd>
                        <dt><b>model:</b></dt>
                        <dd>${this.arr[index].model}</dd>
                        <dt><b>battery:</b></dt>
                        <dd>${this.arr[index].battery}</dd>
                    </dl>
                </div>
            </div>
            <div class="description">
                <b>description:</b><br>
                ${this.arr[index].description}
            </div>
        `
    }
}

let phones = new Phones;