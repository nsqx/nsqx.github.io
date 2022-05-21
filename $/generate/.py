import random, base64
o = ""; a = [[[o]], ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"]]
for b in range(64*64*5): o += a[1][random.randint(0,63)]; print(f"pseudostring\n{o}") # return o
with open("safepseudo.bin", "wb") as f: f.write(base64.b64decode(o))
