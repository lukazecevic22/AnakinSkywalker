import React, {useState} from 'react';
import KontaktList from '../KontaktList';


const Forma = () => {
    const [ime, setIme] = useState('');
    const [broj, setBroj] = useState('');
    const [greska, setGreska] = useState('');
    const [kontakti, setKontakti] = useState([]);
    let [filtrirani,setFiltrirani]=useState([]);

    const DodajKontakt = () => {
        if (ime === '' || broj === '') {
            return setGreska("Polja ne smeju biti prazna")
        };

        if (!broj.startsWith('+')) {
            return setGreska("Broj mora biti u formatu +XXX XXXXXXXXX")
        }
        if (kontakti.find(element => element.ime === ime)) {
            return alert(`Korisnik ${ime} vec postoji`)
        }

        let tmp = [...kontakti];
        tmp.push({ ime: ime, broj: broj });
        setKontakti(tmp)
        setGreska('')
    };

    const Filter = (e) => {
        filtrirani = kontakti.filter((kontakt) => kontakt.ime.includes(e.target.value));
        setFiltrirani(filtrirani)
    }
    return (
        <>
            <input type="text" placeholder="Ime i Prezime" onChange={e => setIme(e.target.value)}></input>
            <input type="text" placeholder="Broj telefona" onChange={e => setBroj(e.target.value)}></input>
            <button type="submit" value="Dodaj" onClick={DodajKontakt}>Potvrdi kontakt</button><br></br>
            <KontaktList kontakti={kontakti} />
            <input type="text" placeholder="Pretraga" onChange={Filter}></input>
            <KontaktList kontakti={filtrirani} />

        
        <div className="greska">
            {`${greska}`}
        </div>
        </>
       )

}

export default Forma