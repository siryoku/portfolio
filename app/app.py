#Flaskとrender_template（HTMLを表示させるための関数）をインポート
from flask import Flask,request, render_template
import model

#Flaskオブジェクトの生成
app = Flask(__name__)

@app.route('/')
# ルート('/')にアクセスすると呼び出される関数
def index():
    # クライアントに送信
    return render_template('index.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/career')
def career():
    return render_template('career.html')

@app.route('/license')
def license():
    return render_template('license.html')

@app.route('/study')
def study():
    return render_template('study.html')

@app.route('/skill')
def skill():
    return render_template('skill.html')

@app.route('/product')
def product():
    return render_template('product.html')

if __name__ == "__main__":
    app.run(debug=True)

