export async function getUserInfo(userName, userPass){    
    let СheckContoller =  (await import("../scripts/checklogin/check-controller.js")).default;
    let checkContoller = new СheckContoller();
    return await checkContoller.check(userName, userPass);
}