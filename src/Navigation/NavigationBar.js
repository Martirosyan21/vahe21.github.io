import { Disclosure } from '@headlessui/react'
import astridIcon from '../assets/images/astridIcon.png'
import {contentMaxWidth} from "../constants";

const navigation = [
    { name: 'PROJECTS', href: '#', current: false },
    { name: 'ABOUT', href: '#', current: true },
]

const NavigationBar = ({scrollToAbout,scrollToLanding,scrollToProjects, selectedButton } ) =>{

    const navBarHandler = (name)=>(
        name.toLowerCase() === 'about'? scrollToAbout(): scrollToProjects()
    );

    return (
        <div className={'bg-transparent fixed top-0 w-full'} >
            <div className={`w-full relative bg-about-background bg-cover ${selectedButton? 'h-16' : 'h-0'}`}>
                <Disclosure as="nav" className="bg-transparent" >
                    <div className="mx-auto" style={contentMaxWidth} >
                        <div className=" flex h-16 items-center justify-between l:pr-0 l:pl-0 md:pr-8 md:pl-8">
                            <a onClick={scrollToLanding} className={'cursor-pointer'} >
                                <img
                                    src={astridIcon}
                                    alt="Your Company"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item
                                        ) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                onClick={()=>navBarHandler(item.name)}
                                                style={{
                                                    fontWeight:'275',
                                                    color:selectedButton === item.name.toLowerCase() ? '#7572fc' : selectedButton === null ? 'white' :'#464646'
                                                }}
                                                className={'text-light font-Kanit text-s'}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Disclosure>
            </div>
         </div>
    )
}

export default NavigationBar
