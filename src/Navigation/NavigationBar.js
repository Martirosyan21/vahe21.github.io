import { Disclosure } from '@headlessui/react'
import astridIcon from '../assets/images/astridIcon.png'

const navigation = [
    { name: 'ABOUT', href: '#', current: true },
    { name: 'PROJECTS', href: '#', current: false },
]

const NavigationBar = ({scrollToAbout,scrollToLanding,scrollToProjects, selectedButton } ) =>{

    const navBarHandler = (name)=>(
        name.toLowerCase() === 'about'? scrollToAbout(): scrollToProjects()
    );

    return (
        <div className={'bg-transparent fixed top-0 w-full'} >
            <Disclosure as="nav" className="bg-transparent ">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <a onClick={scrollToLanding} className={'cursor-pointer'} >
                                    <img
                                        className="h-8 w-auto"
                                        src={astridIcon}
                                        alt="Your Company"
                                    />
                                </a>
                            </div>
                        </div>
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
                                                fontWeight:'200',
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

    )
}

export default NavigationBar
