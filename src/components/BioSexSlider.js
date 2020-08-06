import React, {useRef} from 'react'

const BioSexSlider = () => {
    //REFS
    const biosex1Ref = useRef();
    const biosex2Ref = useRef();

    //HANDLERS
    const handleBiosex1 = e => {
        console.log(biosex1Ref.current.value)

    }
    const handleBiosex2 = e => {
        console.log(biosex2Ref.current.value)
    }

    /* Logic for determining identities
    - 
    */


    return (
        <div>
            <h2>Biological Sex</h2>
            <div className="biosexslider1">
            
                <input onChange={handleBiosex1} ref={biosex1Ref} type="range" min="1" max="100" defaultValue="50" step="0.1" className="slider" label="Biological Femaleness Slider"/>
            </div>
            <div className="biosexslider2">
                <input onChange={handleBiosex2} ref={biosex2Ref} type="range" min="1" max="100" defaultValue="50" step="0.1" className="slider" label="Biological Maleness Slider"/>
            </div>
        </div>
    )
}

export default BioSexSlider
