# O(n^2) time | O(1) space

array = input()
targetSum = input()
def twoNumberSum(array, targetSum):
  for i in range(len(array) - 1):
    first_num = array[i]
  for j in range(i + 1, len(array)):
    second_num = array[j]
    if first_num + second_num == targetSum:
      return [first_num, second_num]
  return []

# O(n) time | O(n) space
def twoNumberSum(array, targetSum):
  	nums = {}
	for num in array:
		if targetSum - num in nums:
			return [targetSum - num, num]
		else:
			nums[num] = True
	return []

# O(nlogn) time | O(1) space
def twoNumberSum(array, targetSum):
  	array.sort()
	left = 0
	right = len(array) - 1
	while left < right:
		currentSum = array[left] + array[right]
		if currentSum == targetSum:
			return [array[left], array[right]]
		elif currentSum < targetSum:
			left += 1
		elif currentSum > targetSum:
			right -=1
	return []