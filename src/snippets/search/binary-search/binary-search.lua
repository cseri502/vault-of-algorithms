-- Binary Search Function
function binarySearch(arr, target)
    local low = 1
    local high = #arr

    while low <= high do
        local mid = math.floor((low + high) / 2)
        if arr[mid] == target then
            return mid -- Target found, return its index
        elseif arr[mid] < target then
            low = mid + 1 -- Search in the right half
        else
            high = mid - 1 -- Search in the left half
        end
    end

    return -1 -- Target not found
end

-- Example usage
local sortedArray = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19}
local target = 7
local result = binarySearch(sortedArray, target)

if result ~= -1 then
    print("Target found at index: " .. result)
else
    print("Target not found")
end