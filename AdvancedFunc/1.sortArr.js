function sort(nums, str) {
    switch (str) {
        case "asc":
            nums.sort((a,b)=>a-b)
            break;
        case "desc":
            nums.sort((a,b)=>b-a)
            break;
    }
    return nums
}
sort([14, 7, 17, 6, 8], 'asc')
sort([14, 7, 17, 6, 8], 'desc')