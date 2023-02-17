function solution(){
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;

        }
        toString()
        {
            return `Post: ${this.title} \n`+`Content: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, Likes, dislikes) {
            super(title, content);
            this.likes = Likes;
            this.dislikes = dislikes;
            this._comments = []
        }

        addComment(comment) {
            this._comments.push(comment);
        }

        toString() {
            return super.toString() + '\n' +
                `Rating ${this.likes - this.dislikes}` +
                (this._comments.length ? `\nComments` + "\n" + (this._comments.map(c => ` * ${c}`).join("\n")) : "")
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + '\n' + `Views: ${this.views}`
        }
    }

    return{
        Post,
        SocialMediaPost,
        BlogPost,
    }



}

