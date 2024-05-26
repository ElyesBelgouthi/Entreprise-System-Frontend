import { useForm, Controller } from "react-hook-form";
import { Button } from "../app/ui/button";
import { Input } from "../app/ui/input";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogContent,
  Dialog
} from "../app/ui/dialog";
import { Label } from "../app/ui/label";



const AddRoomForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: ""
    }
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button className="ml-auto" size="sm">
        Create Room
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Create a New Chat Room</DialogTitle>
        <DialogDescription>
          Enter the room name
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-6">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-6 items-center gap-4">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <>
                  <Label className="text-left col-span-2" htmlFor="room-name">
                    Room Name
                  </Label>
                  <Input
                    className="col-span-4"
                    id="room-name"
                    placeholder="Enter room name"
                    {...field}
                  />
                </>
              )}
            />
          </div>
          <Button type="submit" className="">
            Create Room
          </Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
  );
};

export default AddRoomForm;
