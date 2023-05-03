import React from 'react'

export default function Button(){
    const onClickButtonOK =() =>{
        alert('OK')
    }
    const onClickButtonCancel =() =>{
         alert('Cancel')
    }

    let banner ='./image/download.jpg'
    let url = 'https://store.steampowered.com'

    const bannerClick =() => {
        window.open(url)

    }
    return (
        <div>
            <img src={banner} onClick={bannerClick} style={{cursor:'pointer',width:'25%'}}/>
            <button onClick={onClickButtonOK}>OK</button>
            <button onClick={onClickButtonCancel}>Cancel</button>
        </div>
    )
 }
