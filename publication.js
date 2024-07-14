
/**
 * La fonction pour les blogs
 * @param {Le nom de la publication} nom 
 * @param {La description} description 
 * @param {L'image} image 
 * @param {La date de publication} date
 */

function makepublication(titrepubli, contenupubli, imgpubli, datepubli){
    let img=imgpubli
    let title=titrepubli
    let contenu=contenupubli
    let date=datepubli
    window.location.href="publication.html?title="+encodeURIComponent(title)+"&date="+encodeURIComponent(date)+"&contenu="+encodeURIComponent(contenu)+"&img="+encodeURIComponent(img)
}

function runpubmaker(){
    let urlgetter=new URLSearchParams(window.location.search)
    let newimg=document.getElementById("newpubimg")
    let newtitle=document.getElementById("newpubnom")
    let newcontenu=document.getElementById("newpubdescription")
    let newdate=document.getElementById("newpubdate")

    newimg.src=urlgetter.get("img")
    newtitle.innerHTML=urlgetter.get("title")
    newcontenu.innerHTML=urlgetter.get("contenu")
    newdate.innerHTML=urlgetter.get("date")
    
}


/***********
* Publication 1
***********/
let nompub1="E-cigarette, GEEKVAP"
let descriptionpub1="Geekvape Max 100(Aegis Max 2) 100W kit"
let datepub1="24 décembre 2023"
let imagepub1="article1.webp"

/***********
* Publication 2
***********/
let nompub2="E-cigarette, GEEKVAP"
let descriptionpub2="Geekvape Max 100(Aegis Max 2) 100W kit"
let datepub2="24 décembre 2023"
let imagepub2="article2.webp"

/***********
* Publication3
***********/
let nompub3="E-cigarette, GEEKVAP"
let descriptionpub3="Geekvape Max 100(Aegis Max 2) 100W kit"
let datepub3="24 décembre 2023"
let imagepub3="article3.webp"

/***********
* Publication4
***********/
let nompub4="E-cigarette, GEEKVAP"
let descriptionpub4="Geekvape Max 100(Aegis Max 2) 100W kit"
let datepub4="24 décembre 2023"
let imagepub4="article4.webp"

/***********
* Publication5
***********/
let nompub5="E-cigarette, GEEKVAP"
let descriptionpub5="Geekvape Max 100(Aegis Max 2) 100W kit"
let datepub5="24 décembre 2023"
let imagepub5="article5.webp"

runpubmaker()
