import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'


function Header(props) {
    let { index, title, descripton} = props

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl '>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{descripton}</p>
        </div>
    )

}

const Generator = (props) => {
    const {poison, setPoison, goal, setGoal, muscles, setMuscles, updateWorkout} = props

    const downIcon = <FontAwesomeIcon icon={faCaretDown} />

    const [showModal, setShowModal] = useState(false)


    function toggleModal() {
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            muscles.filter(val => val !== muscleGroup)
            return
        }
        if (muscles.length > 2) {
            return
        }
        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }
    }
    return (
        <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
            <Header index={'01'} title={'Pick your poison'} descripton={'Select the workout you wish to enjoy.'} />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setPoison(type)
                            setMuscles([])
                        }} key={typeIndex} className={`bg-slate-950 border  py-3 rounded-lg px-4 duration-200 hover:border-blue-600 ${type === poison ? 'border-blue-600' : 'border-blue-400'}`}>
                            <p className='capitalize'>{type.replaceAll("_", " ")}</p>
                        </button>
                    )
                })}
            </div>

            <Header index={'02'} title={'Lock on targets'} descripton={'Select the muscles judged for annihilation.'} />
            <div className='bg-slate-950 p-3 border border-solid border-blue-400 rounded-lg flex flex-col'>

                <button onClick={toggleModal} className='relative flex items-center justify-center p-3'>

                    <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(" ")}</p>
                    <span className='absolute right-3 top-1/2 -translate-y-1/2'>{downIcon}</span>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button key={muscleGroupIndex} className={`hover:text-blue-400 duration-200 ${muscles.includes(muscleGroup) ? 'text-blue-400' : ''}`} onClick={() => {
                                    updateMuscles(muscleGroup)
                                }}>
                                    <p className='uppercase'>{muscleGroup.replaceAll("_", " ")}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>

            <Header index={'03'} title={'Become Juggernaut'} descripton={'Select your ultimate objective.'} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme)
                        }} key={schemeIndex} className={`bg-slate-950 border  py-3 rounded-lg duration-200 px-4 hover:border-blue-600 ${scheme === poison ? 'border-blue-600' : 'border-blue-400'}`}>
                            <p className='capitalize'>{scheme.replaceAll("_", " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Button func={updateWorkout} text={'Formulate'} />
        </SectionWrapper>
    )
}

export default Generator