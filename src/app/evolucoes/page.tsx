'use client'
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import CardSection from "@/app/components/CardSection/CardSection";

function EvolucoesComponent(){
    
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

export default function Evolucoes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EvolucoesComponent />
        </Suspense>
    );
}