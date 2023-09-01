const useFormatDate = () => {

    const formatDate = (date) => {
        const { format } = Intl.DateTimeFormat('bg-BG', {
            year: '2-digit',
            month: 'short',
            day: '2-digit'
        })
        return format(new Date(date));
    }
    const formatTime = (date) => {
        const { format } = Intl.DateTimeFormat('bg-BG', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        })
        return format(new Date(date));
    }

    const formatDateTime = (date) => {
        const { format } = Intl.DateTimeFormat('bg-BG', {
            year: '2-digit',
            month: 'short',
            day: '2-digit',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        })
        return format(new Date(date));
    }
    return {
        formatDate,
        formatTime,
        formatDateTime,
    }
}

export const useFormatOnlyTime = (date) => {
    const { format } = Intl.DateTimeFormat('bg-BG', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    })

    return format(new Date(date));
}

export default useFormatDate;