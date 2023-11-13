"use client"

import { CalendarDays, CalendarMinus, Check } from "lucide-react";
import React, { useState } from "react";

const FirstSection = () => {
    const [isActivePlan, setIsActivePlan] = useState(true);

    const togglePlan = () => {
        setIsActivePlan(!isActivePlan)
    }

    return (
        <div className="flex flex-col space-y-10 pb-20 items-center justify-center">
            <div className="space-y-6 flex flex-col text-center pt-20 px-10 md:px-0">
                <div className="text-gray-800 text-xl">PRICING</div>
                <div className="text-5xl">Easily organize your work. Start free.</div>
                <div className="text-2xl text-gray-500">
                    Access Birds features. No credit card required
                </div>
            </div>

            <div className="flex px-10 md:px-0">
                <button
                    className={`${isActivePlan ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"}
                    p-4 rounded-l-lg focus:outline-none w-40 md:w-80`}
                    onClick={() => setIsActivePlan(true)}
                >
                    <div className="flex items-center justify-center space-x-4">
                        <CalendarMinus size={24} />
                        <div className="text-2xl">Monthly</div>
                    </div>
                </button>
                <button
                    className={`${!isActivePlan
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-600"
                        } p-4 rounded-r-lg focus:outline-none w-40 md:w-80`}
                    onClick={() => setIsActivePlan(false)}
                >
                    <div className="flex items-center justify-center space-x-4">
                        <CalendarDays size={24} />
                        <div className="text-2xl">Yearly</div>
                    </div>
                </button>
            </div>

            {/* <div className="">
                <div
                    className={`${isActivePlan ? "block" : "hidden"
                        } text-center  text-2xl`}
                >   
                </div> */}

            {/* first column of price */}
            <div className="md:flex">
                <div className="md:flex p-10 md:space-x-10 space-y-10 md:space-y-0 items-center justify-center md:w-3/4 md:mx-auto">
                    <div className="border-green-500 p-10 rounded-lg border space-y-8 ">
                        <div className="text-2xl">Basic</div>
                        <div className="text-xl">
                            For teams that need to create project plans with confidence.
                        </div>

                        <div className="text-5xl font-semibold">US $0</div>

                        <div className="">
                            Per user, per month billed annually US $144.00
                        </div>

                        <div className="text-center">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl w-full">
                                Contact Sales
                            </button>
                        </div>

                        <div className="text-2xl underline text-center">Purchase Now</div>

                        <div>Manage tasks and personal to-dos:</div>
                        <div className="flex space-y-6 flex-col">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline</div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited free viewers </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 Participants </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 GB Storage </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Projects </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500"> Unlimited Project boards </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">2 Factor Authentication</div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500"> 24/7 Customer Support </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1 Company </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1 Team </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1 Owner </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Custom Domain
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* </div> */}

                {/* second price column */}
                <div className="md:flex p-10 md:space-x-10 space-y-10 md:space-y-0 items-center justify-center md:w-3/4 md:mx-auto">
                    <div className="border-purple-500 p-10 rounded-lg border space-y-8  ">
                        <div className="text-2xl">Premium</div>
                        <div className="text-xl">
                        For teams that need to create project plans with confidence.
                        </div>

                        {isActivePlan ? (
                            <div>
                                <div className="text-5xl font-semibold"> US $12.00 </div>
                            </div>
                        ) : (
                            <div className="text-5xl font-semibold"> US $129.00 </div>
                        )}

                        <div className="">
                        Per user, per month billed annually US $144.00
                        </div>

                        <div className="text-center">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl w-full">
                                Contact Sales
                            </button>
                        </div>

                        <div className="text-2xl underline text-center">Purchase Now</div>

                        <div>Everything in Basic, plus :</div>
                        <div className="flex space-y-6 flex-col">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited free viewers</div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Participants </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">100 GB Storage </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Projects </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Project boards </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500"> Forms </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Rules</div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500"> Permissions </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Templates</div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Builder </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Search </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                Milestones
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* third price column */}
                <div className="md:flex p-10 md:space-x-10 space-y-10 md:space-y-0 items-center justify-center md:w-3/4 md:mx-auto">
                    <div className="border-[#f59e0b] p-10 rounded-lg border space-y-8  ">
                        <div className="text-2xl">Business</div>
                        <div className="text-xl">
                        For teams that need to create project plans with confidence.
                        </div>

                        {isActivePlan ? (
                            <div>
                                <div className="text-5xl font-semibold"> US $39.00 </div>
                            </div>
                        ) : (
                            <div className="text-5xl font-semibold"> US $400.00 </div>
                        )}

                        <div className="">
                        Per user, per month billed annually US $144.00
                        </div>

                        <div className="text-center">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl w-full">
                                Contact Sales
                            </button>
                        </div>

                        <div className="text-2xl underline text-center">Purchase Now</div>

                        <div>Everything in Premium, plus :</div>
                        <div className="flex space-y-6 flex-col">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Portfolios</div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Product Roadmap</div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Calendar </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline   </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Gantt Chart </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500"> Advanced Integrations    </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500"> Forms </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Permissions  </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Templates   </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Builder </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Search   </div>
                            </div>
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">
                                    Custom Domain
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* </div> */}



        </div>
    )
}

export default FirstSection
