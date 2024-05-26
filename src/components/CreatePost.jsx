import { Button } from "../app//ui/button";

import { Label } from "../app/ui/label";
import { Textarea } from "../app/ui/textarea";
import { CardContent, Card } from "../app/ui/card";

const CreatePost = () => {
  return (
    <Card>
      <CardContent>
        <form className="grid gap-4 pt-6">
          <div className="grid gap-2">
            <Label htmlFor="post-content">What's on your mind?</Label>
            <Textarea
              id="post-content"
              placeholder="Share your thoughts..."
              rows={3}
            />
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost">
                <ImageIcon className="h-5 w-5" />
                <span className="sr-only">Add image</span>
              </Button>
              <Button size="icon" variant="ghost">
                <PaperclipIcon className="h-5 w-5" />
                <span className="sr-only">Add attachment</span>
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Post</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePost;

export function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function PaperclipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}
