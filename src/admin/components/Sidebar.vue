<template>
    <aside class="sidebar hidden transition-all duration-300 ease-out h-auto w-20 fixed left-0 top-0 z-50 lg:block">
        <div class="flex flex-col items-center justify-center w-full h-auto gap-y-4 py-2">
            
            <RouterLink :to="{ name: 'home'}" class="sidebar-hover py-1 flex flex-col items-center gap-y-0.5">
                <img src="/img/isso-trans-logo.png" alt="isso-logo" class="h-10 w-10 lg:h-16 lg:w-16">
            </RouterLink>

            <div class="adminSideBar flex flex-col gap-y-1 overflow-auto">
                <RouterLink :to="{ name: 'admindashboard'}" class="sidebar-hover py-1 flex flex-col items-center gap-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 lg:h-8 lg:w-8">
                        <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
                    </svg>
                    <p class="text-smaller italic text-xs uppercase">Dashboard</p>
                </RouterLink>
                <RouterLink :to="{ name: 'adminattendancecalendar'}" class="sidebar-hover py-1 flex flex-col items-center gap-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 lg:h-8 lg:w-8">
                        <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                        <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                    </svg>
                    <p class="text-smaller italic text-xs uppercase">Attendance</p>
                </RouterLink>
                <RouterLink :to="{ name: 'admincompliance'}" class="sidebar-hover py-1 flex flex-col items-center gap-y-0.5">
                    <i class="fa-solid fa-clipboard-check text-lg lg:text-2xl"></i>
                    <p class="text-smaller italic text-xs uppercase">Compliance</p>
                </RouterLink>
                <RouterLink :to="{ name: 'adminemployee'}" class="sidebar-hover py-1 flex flex-col items-center gap-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 lg:h-8 lg:w-8">
                        <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                    </svg>
                    <p class="text-smaller italic text-xs uppercase">Employee</p>
                </RouterLink>
                <RouterLink :to="{ name: 'adminforms'}" class="sidebar-hover py-1 flex flex-col items-center gap-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 lg:h-8 lg:w-8">
                        <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 17.25a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zm2.25-3a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-5.25z" clip-rule="evenodd" />
                        <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                    </svg>
                    <p class="text-smaller italic text-xs uppercase">Forms</p>
                </RouterLink>
                <RouterLink :to="{ name: 'adminjobposting'}" class="sidebar-hover py-1 flex flex-col items-center gap-y-0.5"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 lg:h-8 lg:w-8">
                        <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                    <p class="text-smaller italic text-xs uppercase">Job Posting</p>
                </RouterLink>
                <RouterLink :to="{ name: 'adminpayroll'}" class="sidebar-hover py-1 flex flex-col items-center gap-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 lg:h-8 lg:w-8">
                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clip-rule="evenodd" />
                    </svg>
                    <p class="text-smaller italic text-xs uppercase">Payroll</p>
                </RouterLink>
                <RouterLink :to="{ name: 'adminrecruitment'}" class="sidebar-hover py-1 flex flex-col items-center gap-y-0.5">
                    <i class="fa-solid fa-address-book text-lg lg:text-2xl"></i>
                    <p class="text-smaller italic text-xs uppercase">Recruitment</p>
                </RouterLink>
                <RouterLink :to="{ name: 'admineventsandupdates'}" class="sidebar-hover py-1 flex flex-col items-center justify-center gap-y-0.5">
                    <i class="fa-solid fa-calendar-week text-lg lg:text-2xl"></i>
                    <p class="text-smaller italic text-xs uppercase text-center">Events and Updates</p>
                </RouterLink>
                <RouterLink :to="{ name: 'adminrequestleave'}" class="sidebar-hover py-1 flex flex-col items-center justify-center gap-y-0.5">
                    <i class="fa-solid fa-business-time text-lg lg:text-2xl"></i>
                    <p class="text-smaller italic text-xs uppercase text-center">Request Leave</p>
                </RouterLink>
                <RouterLink :to="{ name: 'adminreports'}" class="sidebar-hover py-1 flex flex-col items-center justify-center gap-y-0.5">
                    <i class="fa-solid fa-flag text-lg lg:text-2xl"></i>
                    <p class="text-smaller italic text-xs uppercase text-center">Reports</p>
                </RouterLink>
            </div>
        </div>
    </aside>
</template>

<style scoped>
    .sidebar {
        color: #4A7EEE;
        background: #FBFCFF;
        border-right: 2px solid #A6BFF7;
    }
    .text-smaller {
        font-size: 0.64rem;
    }
    .sidebar-hover:hover {
        background: #E9EFFD;
        border-radius: 5px;
    }

    .adminSideBar {
        height: 85vh;
    }

    .adminSideBar::-webkit-scrollbar {
        display: none;
    }

    .adminSideBar {
        -ms-overflow-style: none; 
        scrollbar-width: none; 
    }
</style>