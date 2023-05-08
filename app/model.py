import random
def check_char(name, name_len):

# 1文字の場合
  if name_len == 1:
    result = {'name': name, 'one_char': True }
  elif name_len == 0:
    print("error")
    result = {'name': "", 'one_char': True }
  else:
# 複数文字の場合
    one_name = random.choice(name)
    result = {'name': one_name, 'one_char': False }
  return result


