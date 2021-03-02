var ViewArray = new Array();

class MainViewing {

    constructor(Title, picture, About, Credit, PhotoDate) {
        this.Title = Title;
        this.picture = picture;
        this.About = About;
        this.Credit = Credit;
        this.PhotoDate = PhotoDate;
    }
    saveTitle(Title) {
            
        return "Title: " + this.Title;
        
    }
    saveImage() {
       let picture=["Images/Biking.jpg","Images/CarBoat.jpg","Images/CityCrowd.jpg","Images/Hotel.jpg","Images/Satue.jpg"]
        return "Image: " + picture;
    }
    saveAbout(  ) {
            
        return "About: " + this.About;
    }
    saveCredit( ) {

        return "Credit: " + this.Credit;
    }
    saveDate(   ) {
        
        return "Date: " + this.PhotoDate;
    }

    get picTitle() {
        return this.Title;
    }
    get picImage() {
        return this.picture;
    }
    get picAbout() {
        return this.About;
    }
    get picCredit() {
        return this.Credit;
    }
    get picDate() {
        return this.PhotoDate;
    }

    set picTitle(Title) {
        this.Title=Title;
    }
    set picImage(picture) {
       this.picture=picture;
    }
    set picAbout(About) {
         this.About=About;
    }
    set picCredit(Credit) {
         this.Credit=Credit;
    }
    set picDate(PhotoDate ) {
         this.PhotoDate=PhotoDate;
    }
}

function StartFunction(){
    var TestT= new MainViewing("Main St. Belturbet, Cavan","./Images/CityCrowd.jpg","this photo was of a crowd in a town.","by Eugene Clerkin","circa 1990");
    var TestI= new MainViewing("Statue in the Square","./Images/Statue.jpg","Photo of an older statue.","By Robert French","Circa 1890");
    var TestA= new MainViewing("Opera House, Belfast, Co. Antrim","./Images/Hotel.jpg","Was an older hotel, known for its shows. It became very popular in Belfast.","By:French Roberts","Circa 1909");
    var TestC= new MainViewing("Boating with Cars","./Images/CarBoat.jpg","This was a picture taken at the start of a yacht race in Australia.","By:Australian Photographic Agency","1997");
    var TestD= new MainViewing("Market Square, Bagenalstown, Co. Carlow","./Images/Biking.jpg","A photo apart of a photo collection of the area. It was taken as part of the Lawrence Photography Project.","By: Padraig J. Laffan","1991");
    ViewArray.push(TestT);
    ViewArray.push(TestI);
    ViewArray.push(TestA);
    ViewArray.push(TestC);
    ViewArray.push(TestD);

}

function TestingPrint() {
 RandomNumber=Math.floor(Math.random()*MainViewing.length);
document.getElementById("Title").innerHTML=ViewArray[RandomNumber].saveTitle();
document.getElementById("Image").innerHTML=ViewArray[RandomNumber].saveImage();
document.getElementById("About").innerHTML=ViewArray[RandomNumber].saveAbout();
document.getElementById("Credit").innerHTML=ViewArray[RandomNumber].saveCredit();
document.getElementById("Date").innerHTML=ViewArray[RandomNumber].saveDate();
}

