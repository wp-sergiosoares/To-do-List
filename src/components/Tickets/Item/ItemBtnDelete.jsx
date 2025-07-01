import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";

export default function ItemBtnDelete({ onRemove, item }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex items-center justify-center">
          <button className="text-[var(--color-secondary)] cursor-pointer p-1">
            <Trash2 size={18} />
          </button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Tem a certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onRemove(item.id)}
            className="cursor-pointer"
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
