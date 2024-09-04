// Class Carrousel
//constructor, afficherImage, avancer, reculer
class Carrousel {
    constructor(conteneurHTML, tableauImages) {
        //ConteneurHTML
        this.conteneurHTML = conteneurHTML;
        this.imageConteneur = this.conteneurHTML.querySelector(".image-principale");

        //Liste images a afficher
        this.tableauImages = tableauImages;

        //position à laquelle je suis rendu dans tableau
        this.position = 0;

        let imageAuDepart = this.tableauImages[this.position];
        this.afficherImage(imageAuDepart);

        console.log(this);
        let contexteClasse = this;

        window.setInterval(
            function () {
                this.avancer();
            }.bind(contexteClasse),
            3000
        );
    }

    //Fonction qui affiche une image
    afficherImage(source) {
        this.imageConteneur.src = source;
    }

    avancer() {
        this.position++;
        if (this.position >= this.tableauImages.length) {
            this.position = 0;
        }

        let image = this.tableauImages[this.position];
        this.afficherImage(image);
    }

    reculer() {}
}

export default Carrousel;
