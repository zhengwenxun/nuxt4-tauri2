<template>
    <div>tauri</div>
</template>
<script setup>
    const isDev = process.env.NODE_ENV === 'development';
    onMounted(() => {
        if (!isDev) {
            const disableNativeFeatures = () => {
                document.addEventListener(
                    'contextmenu',
                    (e) => {
                        e.preventDefault();
                        return false;
                    },
                    { capture: true },
                );
            };

            disableNativeFeatures();
        }
    });
</script>
