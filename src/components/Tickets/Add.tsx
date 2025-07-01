import { useContext } from "react";
import { TarefasContext } from "../../context/TarefasContext";

// Importa os hooks e utilitários necessários do react-hook-form e zod para gerenciamento e validação de formulários.
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Importa os componentes do formulário shadcn/ui.
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

// Define o esquema de validação para o formulário usando Zod.
// 'task' é um campo de string que deve ter pelo menos 1 caractere.
const formSchema = z.object({
  task: z.string().min(1, { message: "A tarefa não pode estar vazia." }),
});

export default function AddTicket() {
  // Acessa a função 'addItem' do contexto para adicionar novas tarefas.
  const { addItem } = useContext(TarefasContext);
  // Cria uma referência para o elemento DOM do formulário para uso com GSAP.

  // Inicializa o formulário usando useForm do react-hook-form.
  // O 'resolver' integra o Zod para validação baseada no 'formSchema'.
  // 'defaultValues' define o estado inicial do formulário.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
    },
  });

  // Função chamada ao submeter o formulário, se a validação for bem-sucedida.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Adiciona a tarefa usando a função do contexto, removendo espaços em branco extras.
    addItem(values.task.trim());
    // Reseta o formulário para os valores padrão após a submissão.
    form.reset();
  };

  return (
    // O componente Form do shadcn/ui envolve o formulário HTML e passa as props do useForm.
    <Form {...form}>
      <form
        // O onSubmit do formulário HTML é conectado ao handleSubmit do react-hook-form,
        // que gerencia a validação antes de chamar 'onSubmit'.
        onSubmit={form.handleSubmit(onSubmit)}
        className="form flex gap-2 items-center justify-between"
      >
        {/* Field do formulário para o campo 'task'. */}
        <FormField
          control={form.control} // Conecta este campo ao controle do formulário.
          name="task" // Nome do campo, deve corresponder ao esquema Zod.
          render={(
            { field } // Renderiza o input e seus elementos associados.
          ) => (
            <FormItem className="relative flex items-center justify-between w-full">
              {/* FormControl envolve o input real. */}
              <FormControl>
                <input
                  type="text"
                  placeholder="Adicione uma tarefa..."
                  className="input-adicionar"
                  {...field} // Propriedades do campo (value, onChange, onBlur, etc.) são passadas para o input.
                />
              </FormControl>
              {/* Botão de submissão do formulário. */}
              <button
                type="submit"
                className="absolute right-[3px] bg-[var(--color-primary)] text-white py-3 px-4 rounded-full hover:bg-[var(--color-primary-hover)] cursor-pointer text-sm tracking-wider transition font-[Nunito]"
              >
                Adicionar
              </button>
              {/* Exibe mensagens de erro de validação para este campo. */}
              <FormMessage className="absolute -bottom-6 left-0 text-xs text-red-500" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
