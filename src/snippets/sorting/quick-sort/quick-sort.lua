-- Quick Sort implementation in Lua

-- Function to partition the array
local function partition(arr, low, high)
    local pivot = arr[high]
    local i = low - 1

    for j = low, high - 1 do
        if arr[j] <= pivot then
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]
        end
    end

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1
end

-- Quick Sort function
local function quickSort(arr, low, high)
    if low < high then
        local pi = partition(arr, low, high)

        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)
    end
end

-- Example usage
local array = {10, 7, 8, 9, 1, 5}
local n = #array

print("Unsorted array:")
for i = 1, n do
    io.write(array[i], " ")
end
print()

quickSort(array, 1, n)

print("Sorted array:")
for i = 1, n do
    io.write(array[i], " ")
end
print()