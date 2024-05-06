// loading.tsx 是一个基于 Suspense 构建的特殊 Next.js 文件，它允许您创建回退 UI，以在页面内容加载时显示为替代。
// 由于 <Sidebar> 是静态的，因此它会立即显示。用户可以在动态内容加载时与 <Sidebar> 进行交互。

import DashboardSkeleton from "../../ui/skeletons";

// 用户在导航离开之前不必等待页面完成加载（这称为可中断导航）。
export default function Loading() {
  return <DashboardSkeleton />;
}
