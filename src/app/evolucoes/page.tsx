'use client'
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import CardSection from "@/app/components/CardSection/CardSection";

export default function Evolucoes(){
    
    const searchParams = useSearchParams();
    const evolucao = searchParams.get('evolucao');
    const [img, setImg] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao}`)
        .then((res) => res.json())
        .then((data) => {
            setImg(data.sprites.front_default)
        })
    }, [evolucao])
    
    return (
        <CardSection title={evolucao!}>
            <img src={img} style={{width: "300px"}}></img>
        </CardSection>
    )

}