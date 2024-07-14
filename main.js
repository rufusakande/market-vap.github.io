const btnburger=document.querySelector('.menu_burger')
const btnretour=document.querySelector('.menu_retour')
const nav=document.getElementById('navigation')
const linknav=document.querySelectorAll('.navigation')


    btnburger.addEventListener('click',()=>{
        nav.style.left='0%'
        btnretour.style.display='flex'
        btnburger.style.display='none'
    })
    
    btnretour.addEventListener('click',()=>{
        nav.style.left='-100%'
        btnretour.style.display='none'
        btnburger.style.display='flex'
    })
    

/****************************************************************************************************/
/************************ Création d'un header  ******************************/
/****************************************************************************************************/



    linknav.forEach(link => {
        link.addEventListener('click',()=>{
            nav.style.right='-100%'
            btnretour.style.display='none'
            btnburger.style.display='block'
        })
    });



/**
 * La fonction pour les article
 * @param {Le nom pour l'article} nom
 * @param {La description} description
 * @param {Le prix} prix
 * @param {L'image} image
 */

function makearticle(nom, description, prix, image){
    let i=image
    let n=nom
    let d=description
    let p=prix

    window.location.href="article.html?nom="+encodeURIComponent(n)+"&prix="+encodeURIComponent(p)+"&description="+encodeURIComponent(d)+"&image="+encodeURIComponent(i)

}


function runarticlemaker(){
    let urlpara=new URLSearchParams(window.location.search)
    let newi=document.getElementById("newarticleimg")
    let newn=document.getElementById("newarticlenom")
    let newd=document.getElementById("newarticledescription")
    let newp=document.getElementById("newarticleprix")

    newi.src=urlpara.get("image")
    newn.innerHTML=urlpara.get("nom")
    newd.innerHTML=urlpara.get("description")
    newp.innerHTML=urlpara.get("prix")
}
runarticlemaker()





