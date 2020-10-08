import React from 'react'

//Styled Components

//React Component
const ContactForm: React.FC = () => {
  return (
    <>
      <div>
        {/* Let's gorw your buisness!
                ---constact us  */}
        <form>
          <fieldset>
            <legend>What can we do for you?</legend>
            <input type="checkbox" id="Buisness Consulting" name="monster" />
            <label htmlFor="Buisness Consulting">Buisness Consulting</label>

            <input type="checkbox" id="Digital Marketing" name="monster" />
            <label htmlFor="Digital Marketing">Digital Marketing</label>

            <input type="checkbox" id="Website" name="monster" />
            <label htmlFor="Website">Website</label>
          </fieldset>
        </form>
        {/* 
            <div flexbox ontact forme on the left and info on the right>
                <div>contact form </div>
                <div> Tell us about your vision: which challenges are you facing? what are your goals and expectaions? what would secuess look like and how can we help you get there?  </div>
            </div>

        */}
      </div>
    </>
  )
}
export default ContactForm
