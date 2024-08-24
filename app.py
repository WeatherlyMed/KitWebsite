from flask import Flask, render_template

app = Flask(__name__, static_folder='assets')

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True, port=57309)
