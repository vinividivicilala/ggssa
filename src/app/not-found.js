'use client'

//For some reason I can't use 404.js pages router Next JS functionality to add a custom 404 page
//If I use App Router not-found then I can't use any tailwind css class nor import any component, 
//even if I try to make the component client only. For that reason, I use this hack to solve the problem.
function NotFound() {
    if (typeof window !== "undefined") {
        window.location.href = `${window.location.origin}/error`
    }
}

export default NotFound;