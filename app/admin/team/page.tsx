"use client"

import MemberCard2, { Item } from "@/components/card/memberCard2";
import { useState } from "react";
import teamMembers from "@/mockData/teamMembersData";
import AddMemberModal from "@/components/modal/addMemberModal";
export default function Team() {
    const [filter, setFilter] = useState(0);
    const [memberModal, setMemberModal] = useState(false);

    const filterData = () => {
        let result= []
        switch (filter) {
            case 0:
                result = teamMembers;
                break;
            case 1:
                result = teamMembers.filter((item) => item.status == "online")
                break;
            case 2:
                result = teamMembers.filter((item) => item.type == "admin")
                break;
            case 3:
                result = teamMembers.filter((item) => item.type == "manager")
                break;
            default:
                result = teamMembers.filter((item) => item.type == "member")
                break;
        }
        return result;
    }

    return (
        <div className="pt-20 pl-64 pr-6 min-h-screen w-screen overflow-x-hidden">
            <div className=" mx-auto space-y-6">
                {/* <!-- Header Section --> */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">Team Members</h1>
                        <p className="text-sm text-gray-500 mt-1">Manage and oversee your team across all projects</p>
                    </div>
                    <button data-new-member onClick={()=>setMemberModal(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        Add Member
                    </button>
                </div>

                {/* <!-- Stats Cards --> */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* <!-- Total Members --> */}
                    <div className="stats-card gradient-border card-shine p-4 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Total Members</p>
                                <h3 className="text-xl font-bold text-gray-900">48</h3>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Active Now --> */}
                    <div className="stats-card gradient-border card-shine p-4 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Active Now</p>
                                <h3 className="text-xl font-bold text-gray-900">24</h3>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Projects Assigned --> */}
                    <div className="stats-card gradient-border card-shine p-4 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Active Projects</p>
                                <h3 className="text-xl font-bold text-gray-900">32</h3>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Tasks in Progress --> */}
                    <div className="stats-card gradient-border card-shine p-4 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Tasks in Progress</p>
                                <h3 className="text-xl font-bold text-gray-900">156</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Main Content --> */}
                <div className="bg-white rounded-xl border border-gray-100">
                    {/* <!-- Filters Bar --> */}
                    <div className="p-4 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button onClick={() => setFilter(0)}
                                    className={`filter-btn active px-4 py-2 text-sm font-medium rounded-lg ${filter == 0 ? "text-brand-500 bg-brand-50" : "text-gray-600 hover:bg-gray-50"} `}>
                                    All Members
                                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">48</span>
                                </button>
                                <button onClick={() => setFilter(1)}
                                    className={`filter-btn active px-4 py-2 text-sm font-medium rounded-lg ${filter == 1 ? "text-brand-500 bg-brand-50" : "text-gray-600 hover:bg-gray-50"} `}>
                                    Active
                                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">24</span>
                                </button>
                                <button onClick={() => setFilter(2)}
                                    className={`filter-btn active px-4 py-2 text-sm font-medium rounded-lg ${filter == 2 ? "text-brand-500 bg-brand-50" : "text-gray-600 hover:bg-gray-50"} `}>
                                    Admin
                                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">4</span>
                                </button>
                                <button onClick={() => setFilter(3)}
                                    className={`filter-btn active px-4 py-2 text-sm font-medium rounded-lg ${filter == 3 ? "text-brand-500 bg-brand-50" : "text-gray-600 hover:bg-gray-50"} `}>
                                    Managers
                                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">8</span>
                                </button>
                                <button onClick={() => setFilter(4)}
                                    className={`filter-btn active px-4 py-2 text-sm font-medium rounded-lg ${filter == 4 ? "text-brand-500 bg-brand-50" : "text-gray-600 hover:bg-gray-50"} `}>
                                    Members
                                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">18</span>
                                </button>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <input type="text" placeholder="Search members..."
                                        className="w-64 h-10 pl-10 pr-4 text-sm bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-brand-500/20"
                                        id="searchInput" />
                                    <svg className="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <button
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                    </svg>
                                    Filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Team Members Grid --> */}
                    <div id="team-members-container" className="bg-white rounded-xl border border-gray-100">
                        {/* <!-- Members grid will be rendered here --> */}
                        <div className="team-members-grid p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* <!-- Team members will be dynamically inserted here --> */}
                            {
                                filterData().map((item: Item, index: number) => {
                                    return (
                                        <MemberCard2 key={index} member={item} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {
                memberModal ? (
                    <AddMemberModal closeModal={setMemberModal}/>
                ) : (
                    <></>
                )
            }
        </div >

    );


}