-- Merge Sort implementation in Lua

-- Function to merge two subarrays
local function merge(arr, left, mid, right)
    local n1 = mid - left + 1
    local n2 = right - mid

    local leftArr = {}
    local rightArr = {}

    for i = 1, n1 do
        leftArr[i] = arr[left + i - 1]
    end

    for j = 1, n2 do
        rightArr[j] = arr[mid + j]
    end

    local i, j, k = 1, 1, left

    while i <= n1 and j <= n2 do
        if leftArr[i] <= rightArr[j] then
            arr[k] = leftArr[i]
            i = i + 1
        else
            arr[k] = rightArr[j]
            j = j + 1
        end
        k = k + 1
    end

    while i <= n1 do
        arr[k] = leftArr[i]
        i = i + 1
        k = k + 1
    end

    while j <= n2 do
        arr[k] = rightArr[j]
        j = j + 1
        k = k + 1
    end
end

-- Function to perform merge sort
local function mergeSort(arr, left, right)
    if left < right then
        local mid = math.floor((left + right) / 2)

        mergeSort(arr, left, mid)
        mergeSort(arr, mid + 1, right)

        merge(arr, left, mid, right)
    end
end

-- Example usage
local array = {38, 27, 43, 3, 9, 82, 10}
print("Original array:")
for i = 1, #array do
    io.write(array[i] .. " ")
end
print()

mergeSort(array, 1, #array)

print("Sorted array:")
for i = 1, #array do
    io.write(array[i] .. " ")
end
print()