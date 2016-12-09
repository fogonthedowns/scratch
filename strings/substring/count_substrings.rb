b = "adfabcabcddfabcc"
a = "abc"
b.scan('abc').count

count = 0
len = b.length
sublen = a.length
for indx in (0..len)
  if a == b[indx..(indx+(sublen-1))]
    count +=1
  end
end