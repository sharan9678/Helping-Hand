import React from 'react';

const Condition = ({ prevStep, nextStep, values }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }

    const Prev = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div className="form">
            <h1>Who needs help?</h1>
            <p className="steps">Step 1 of 3</p>
            <form>
                <fieldset>
                    <legend>How many person need help?</legend>
                    <div className="radio-btn" >
                        <label htmlFor="one">
                        <input type="radio" id="one" name="number_of_person" value={values.one}/>
                        1</label>
                        <label htmlFor="two">
                        <input type="radio" id="two" name="number_of_person" value={values.two}/>
                        2</label>
                        <label htmlFor="more">
                        <input type="radio" id="more" name="number_of_person" value={values.many}/>
                        more</label>
                    </div>
                </fieldset>
                <fieldset className="checkbox-container large">
                    <legend>Condition of the person?</legend>
                    <label htmlFor="good">
                    <input type="checkbox" id="good" name="condition_of_person" value={values.good}/>
                    Good</label>
                    <label htmlFor="anxious">
                    <input type="checkbox" id="anxious" name="condition_of_person" value={values.anxious}/>
                    Anxious</label>
                    {/* <label htmlFor="aggressive">
                    <input type="checkbox" id="aggressive" name="condition_of_dog" value={values.aggressive} />
                    Agressive</label> */}
                    <label htmlFor="wounded">
                    <input type="checkbox" id="wounded" name="condition_of_person" value={values.wounded}/>
                    Wounded</label>
                    <label htmlFor="unknown">
                    <input type="checkbox" id="unknown" name="condition_of_person" value={values.unknown}/>
                    Unknown</label>
                </fieldset> 
            </form>
            <footer>
                <button onClick={Prev} className="btn nav-btn prev">Previous</button>
                    <button onClick={Next} className="btn nav-btn next">Next</button>
            </footer>
        </div>
    )
}

export default Condition;