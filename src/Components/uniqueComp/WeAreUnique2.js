import React from 'react'
import UniqueCards from '../../ReusableComponents/UniqueCards'

const data = [
    {
      id: "01",
      title: "Integrated intelligent sensors",
      descrption:
        "Has EEG, PPG and fNIRS sensors which work in tandem to sense brain waves, bio-potentials and cerebral blood flow representing current brain health of patients in affordable price than standard brain health diagnosis",
    },
    {
      id: "02",
      title: "Real-time data driven personalized cognitive management",
      descrption:
        "Seamless integration of hardware hearables and software platform",
    },
    {
      id: "03",
      title: "Improving patient-doctor relationship",
      descrption:
        "Follow-up routine consultations doctors and other healthcare professional Generate actionable RWE for precision medicine and innovative study.",
    },
  ];

function weAreUnique2() {
  return (
    <div>
        <UniqueCards
        number={data[0].id}
        title={data[0].title}
        description={data[0].descrption}
        bgColor="blue"
        textColor="white" />
        
    </div>
  )
}

export default weAreUnique2